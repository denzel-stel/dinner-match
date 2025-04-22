CREATE TABLE "session_dietary_restrictions" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_id" serial NOT NULL,
	"dietary_restriction" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session_members" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_id" serial NOT NULL,
	"user_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"ends_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "ingredients" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "recipes" ADD COLUMN "name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "recipes" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "recipes" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "first_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_at" integer;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" integer;--> statement-breakpoint
ALTER TABLE "session_dietary_restrictions" ADD CONSTRAINT "session_dietary_restrictions_session_id_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."sessions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session_members" ADD CONSTRAINT "session_members_session_id_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."sessions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session_members" ADD CONSTRAINT "session_members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ingredients" DROP COLUMN "quantity";--> statement-breakpoint
ALTER TABLE "recipes" DROP COLUMN "title";