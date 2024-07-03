import { User } from '../users/user.dto';

export class Pipeline{
  id: number;
  sha: string;
  ref: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  finishedAt: string;
  webUrl: string;
  projectName: string;
  projectId: string;
  category: string;
}

export class PipelineTriggerUserInfo{
  user: User;
  startedAt: string;
  duration: number;
}
