import { type NextPageProps } from '@/@types/global';

export interface GithubStars {
  stargazers_count: number;
}

export interface TestData {
  id: number;
  created_at: Date | string;
}

export interface AboutPageProps extends NextPageProps {
  githubStars: number;
  testData: TestData[];
}
