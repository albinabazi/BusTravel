CREATE TABLE IF NOT EXISTS public.instructors
(
    id BIGSERIAL PRIMARY KEY,
    first_name text COLLATE pg_catalog."default" NOT NULL,
    last_name text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    pasword text COLLATE pg_catalog."default" NOT NULL,
    bio text COLLATE pg_catalog."default",
    created_at timestamp without time zone,
    created_by bigint,
    updated_at timestamp without time zone,
    updated_by bigint,
    deleted_at timestamp without time zone,
    deleted_by bigint
);