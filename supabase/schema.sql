-- pgvector 확장
create extension if not exists vector;

-- RAG 문서 청크
create table if not exists documents (
  id        bigserial primary key,
  content   text        not null,
  source    text        not null,
  embedding vector(1536)
);

create index if not exists documents_embedding_idx
  on documents using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- 유사도 검색 함수
create or replace function match_documents(
  query_embedding vector(1536),
  match_count     int default 5
)
returns table (
  id         bigint,
  content    text,
  source     text,
  similarity float
)
language sql stable as $$
  select
    id,
    content,
    source,
    1 - (embedding <=> query_embedding) as similarity
  from documents
  order by embedding <=> query_embedding
  limit match_count;
$$;

-- 상담 리드
create table if not exists leads (
  id         bigserial primary key,
  name       text,
  email      text,
  phone      text,
  message    text,
  created_at timestamptz default now()
);

-- 대화 로그
create table if not exists chat_logs (
  id         bigserial primary key,
  question   text,
  answer     text,
  created_at timestamptz default now()
);
