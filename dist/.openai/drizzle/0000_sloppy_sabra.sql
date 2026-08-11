CREATE TABLE "leads" (
	"id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))) NOT NULL,
	"name" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"message" TEXT NOT NULL,
	"choices" TEXT NOT NULL,
	"created_at" TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))) NOT NULL,
	"email" TEXT NOT NULL,
	"password_hash" TEXT NOT NULL,
	"role" TEXT DEFAULT 'admin' NOT NULL,
	"created_at" TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
