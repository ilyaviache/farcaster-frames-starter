import { SupabaseClient } from '@supabase/supabase-js';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

import { createServerClient } from '@/packages/server/supabase';

const TABLE_NAME = 'examples';

export class ExampleModel {
  id: string;
  created_at: string;

  constructor(id: string, created_at: string) {
    this.id = id;
    this.created_at = created_at;
  }
}

class ExampleService {
  supabase: SupabaseClient;

  constructor(cookieStore: ReturnType<typeof cookies>) {
    this.supabase = createServerClient(cookieStore);
  }

  // Get all examples
  async getExamples(page: number = 1, pageSize: number = 100): Promise<ExampleModel[]> {
    const { data, error } = await this.supabase
      .from(TABLE_NAME)
      .select('*')
      .range((page - 1) * pageSize, page * pageSize - 1);
    if (error) throw new Error(error.message);
    return data ? data.map((example: ExampleModel) => new ExampleModel(example.id, example.created_at)) : [];
  }

  // Get example by ID
  async getExample(id: string): Promise<ExampleModel | null> {
    const { data, error }: PostgrestSingleResponse<ExampleModel> = await this.supabase
      .from(TABLE_NAME)
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new Error(error.message);
    return data ? new ExampleModel(data.id, data.created_at) : null;
  }

  // Create a new example
  async createExample(): Promise<ExampleModel | null> {
    const { data, error }: PostgrestSingleResponse<ExampleModel> = await this.supabase
      .from(TABLE_NAME)
      .insert([{ created_at: new Date().toISOString() }])
      .select('*')
      .single();

    if (error) throw new Error(error.message);
    return data ? new ExampleModel(data.id, data.created_at) : null;
  }

  // Update example by ID
  async updateExample(id: string, created_at: string): Promise<ExampleModel | null> {
    const { data, error }: PostgrestSingleResponse<ExampleModel> = await this.supabase
      .from(TABLE_NAME)
      .update({ created_at })
      .eq('id', id)
      .select('*')
      .single();
    if (error) throw new Error(error.message);
    return data ? new ExampleModel(data.id, data.created_at) : null;
  }

  // Delete example by ID
  async deleteExample(id: string): Promise<ExampleModel | null> {
    const { data, error }: PostgrestSingleResponse<ExampleModel> = await this.supabase
      .from(TABLE_NAME)
      .delete()
      .eq('id', id)
      .select('*')
      .single();
    if (error) throw new Error(error.message);
    return data ? new ExampleModel(data.id, data.created_at) : null;
  }
}

export default ExampleService;
