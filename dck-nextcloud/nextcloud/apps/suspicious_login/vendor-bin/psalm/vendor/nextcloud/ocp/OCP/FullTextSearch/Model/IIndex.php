<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCP\FullTextSearch\Model;

/**
 * Interface IIndex
 *
 * Index are generated by FullTextSearch to manage the status of a document
 * regarding the date of the last index and the date of the last modification
 * of the original document.
 *
 * The uniqueness of an IIndexDocument is made by the Id of the Content Provider
 * and the Id of the original document within the Content Provider.
 *
 * We will call original document the source from which the IIndexDocument is
 * generated. As an example, an original document can be a file, a mail, ...
 *
 * @since 15.0.0
 *
 */
interface IIndex {
	/**
	 * @since 15.0.0
	 */
	public const INDEX_OK = 1;

	/**
	 * @since 15.0.0
	 */
	public const INDEX_IGNORE = 2;

	/**
	 * @since 15.0.0
	 */
	public const INDEX_META = 4;

	/**
	 * @since 15.0.0
	 */
	public const INDEX_CONTENT = 8;

	/**
	 * @since 16.0.0
	 */
	public const INDEX_PARTS = 16;

	/**
	 * @since 15.0.0
	 */
	public const INDEX_FULL = 28;

	/**
	 * @since 15.0.0
	 */
	public const INDEX_REMOVE = 32;

	/**
	 * @since 15.0.0
	 */
	public const INDEX_DONE = 64;

	/**
	 * @since 15.0.0
	 */
	public const INDEX_FAILED = 128;

	/**
	 * @since 15.0.0
	 */
	public const ERROR_FAILED = 1;

	/**
	 * @since 15.0.0
	 */
	public const ERROR_FAILED2 = 2;

	/**
	 * @since 15.0.0
	 */
	public const ERROR_FAILED3 = 4;

	/**
	 * @since 15.0.0
	 */
	public const ERROR_SEV_1 = 1;

	/**
	 * @since 15.0.0
	 */
	public const ERROR_SEV_2 = 2;

	/**
	 * @since 15.0.0
	 */
	public const ERROR_SEV_3 = 3;

	/**
	 * @since 15.0.0
	 */
	public const ERROR_SEV_4 = 4;


	/**
	 * Get the Id of the Content Provider.
	 *
	 * @since 15.0.0
	 *
	 * @return string
	 */
	public function getProviderId(): string;


	/**
	 * Get the Id of the original document.
	 *
	 * @since 15.0.0
	 *
	 * @return string
	 */
	public function getDocumentId(): string;


	/**
	 * Get the collection of the index.
	 * If empty (''), means collection is the default one used by the internal framework
	 *
	 * @since 24.0.0
	 *
	 * @return string
	 */
	public function getCollection(): string;


	/**
	 * Set the source of the original document.
	 *
	 * @since 15.0.0
	 *
	 * @param string $source
	 *
	 * @return IIndex
	 */
	public function setSource(string $source): IIndex;

	/**
	 * Get the source of the original document.
	 *
	 * @since 15.0.0
	 *
	 * @return string
	 */
	public function getSource(): string;


	/**
	 * Set the owner of the original document.
	 *
	 * @since 15.0.0
	 *
	 * @param string $ownerId
	 *
	 * @return IIndex
	 */
	public function setOwnerId(string $ownerId): IIndex;

	/**
	 * Get the owner of the original document.
	 *
	 * @since 15.0.0
	 *
	 * @return string
	 */
	public function getOwnerId(): string;


	/**
	 * Set the current index status (bit flag) of the original document.
	 * If $reset is true, the status is reset to the defined value.
	 *
	 * @since 15.0.0
	 *
	 * @param int $status
	 * @param bool $reset
	 *
	 * @return IIndex
	 */
	public function setStatus(int $status, bool $reset = false): IIndex;

	/**
	 * Get the current index status of the original document.
	 *
	 * @since 15.0.0
	 *
	 * @return int
	 */
	public function getStatus(): int;

	/**
	 * Check if the document fit a specific status.
	 *
	 * @since 15.0.0
	 *
	 * @param int $status
	 *
	 * @return bool
	 */
	public function isStatus(int $status): bool;

	/**
	 * Remove a status.
	 *
	 * @since 15.0.0
	 *
	 * @param int $status
	 *
	 * @return IIndex
	 */
	public function unsetStatus(int $status): IIndex;


	/**
	 * Add an option related to the original document (as string).
	 *
	 * @since 15.0.0
	 *
	 * @param string $option
	 * @param string $value
	 *
	 * @return IIndex
	 */
	public function addOption(string $option, string $value): IIndex;

	/**
	 * Add an option related to the original document (as integer).
	 *
	 * @since 15.0.0
	 *
	 * @param string $option
	 * @param int $value
	 *
	 * @return IIndex
	 */
	public function addOptionInt(string $option, int $value): IIndex;

	/**
	 * Get the option related to the original document (as string).
	 *
	 * @since 15.0.0
	 *
	 * @param string $option
	 * @param string $default
	 *
	 * @return string
	 */
	public function getOption(string $option, string $default = ''): string;

	/**
	 * Get the option related to the original document (as integer).
	 *
	 * @since 15.0.0
	 *
	 * @param string $option
	 * @param int $default
	 *
	 * @return int
	 */
	public function getOptionInt(string $option, int $default = 0): int;

	/**
	 * Get all options related to the original document.
	 *
	 * @since 15.0.0
	 *
	 * @return array
	 */
	public function getOptions(): array;


	/**
	 * Add an error log related to the Index.
	 *
	 * @since 15.0.0
	 *
	 * @param string $message
	 * @param string $exception
	 * @param int $sev
	 *
	 * @return IIndex
	 */
	public function addError(string $message, string $exception = '', int $sev = self::ERROR_SEV_3): IIndex;

	/**
	 * Returns the number of known errors related to the Index.
	 *
	 * @since 15.0.0
	 *
	 * @return int
	 */
	public function getErrorCount(): int;

	/**
	 * Reset all error logs related to the Index.
	 *
	 * @since 15.0.0
	 */
	public function resetErrors(): IIndex;


	/**
	 * Set the date of the last index.
	 *
	 * @since 15.0.0
	 *
	 * @param int $lastIndex
	 *
	 * @return IIndex
	 */
	public function setLastIndex(int $lastIndex = -1): IIndex;

	/**
	 * Get the date of the last index.
	 *
	 * @since 15.0.0
	 *
	 * @return int
	 */
	public function getLastIndex(): int;
}
