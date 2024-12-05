CREATE TABLE `notification` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(50) NOT NULL,
	`description` text(500) NOT NULL,
	`datetime` text NOT NULL,
	`isSent` integer DEFAULT 0 NOT NULL,
	`email` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
