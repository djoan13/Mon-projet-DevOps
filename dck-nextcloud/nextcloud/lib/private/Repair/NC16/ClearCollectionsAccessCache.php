<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OC\Repair\NC16;

use OC\Collaboration\Resources\Manager;
use OCP\Collaboration\Resources\IManager;
use OCP\IConfig;
use OCP\Migration\IOutput;
use OCP\Migration\IRepairStep;

class ClearCollectionsAccessCache implements IRepairStep {
	/** @var IConfig */
	private $config;

	/** @var Manager */
	private $manager;

	public function __construct(IConfig $config, IManager $manager) {
		$this->config = $config;
		$this->manager = $manager;
	}

	public function getName(): string {
		return 'Clear access cache of projects';
	}

	private function shouldRun(): bool {
		$versionFromBeforeUpdate = $this->config->getSystemValueString('version', '0.0.0.0');
		return version_compare($versionFromBeforeUpdate, '17.0.0.3', '<=');
	}

	public function run(IOutput $output): void {
		if ($this->shouldRun()) {
			$this->manager->invalidateAccessCacheForAllCollections();
		}
	}
}
