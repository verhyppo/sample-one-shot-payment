create table
    public.orders (
                      id bigint generated by default as identity,
                      created_at timestamp with time zone not null default now(),
                      updated_at timestamp with time zone null default now(),
                      order_id text not null,
                      trace_id character varying null default '255'::character varying,
                      user_id text null,
                      "order" jsonb null,
                      response jsonb null,
                      ack boolean null default false,
                      constraint Order_pkey primary key (id),
                      constraint Order_order_id_key unique (order_id)
) tablespace pg_default;