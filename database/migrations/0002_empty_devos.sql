ALTER TABLE "users" ALTER COLUMN "password" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "stytch_uuid" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "ingredients" DROP COLUMN "created_at";--> statement-breakpoint
ALTER TABLE "recipes" DROP COLUMN "created_at";