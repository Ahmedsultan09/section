CREATE TABLE `inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` integer NOT NULL,
	`status` text DEFAULT 'received' NOT NULL,
	`locale` text NOT NULL,
	`name` text NOT NULL,
	`company` text NOT NULL,
	`role` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`preferred_contact` text NOT NULL,
	`sector` text NOT NULL,
	`project_name` text NOT NULL,
	`location` text NOT NULL,
	`project_stage` text NOT NULL,
	`capabilities` text NOT NULL,
	`service_scope` text NOT NULL,
	`scale` text NOT NULL,
	`drawings_status` text NOT NULL,
	`role_detail` text,
	`target_delivery` text NOT NULL,
	`budget_band` text NOT NULL,
	`procurement_status` text NOT NULL,
	`decision_timeline` text NOT NULL,
	`brief` text NOT NULL,
	`consent` integer NOT NULL,
	`source_ip` text,
	`user_agent` text,
	`notification_error` text
);
--> statement-breakpoint
CREATE TABLE `inquiry_attachments` (
	`id` text PRIMARY KEY NOT NULL,
	`inquiry_id` text NOT NULL,
	`storage_key` text NOT NULL,
	`original_name` text NOT NULL,
	`mime_type` text NOT NULL,
	`bytes` integer NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`inquiry_id`) REFERENCES `inquiries`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `inquiry_attachments_storage_key_unique` ON `inquiry_attachments` (`storage_key`);