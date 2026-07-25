CREATE TYPE "public"."lead_status" AS ENUM('not_contacted', 'contacted');
--> statement-breakpoint
ALTER TABLE "leads" ADD COLUMN "status" "lead_status" DEFAULT 'not_contacted' NOT NULL;
