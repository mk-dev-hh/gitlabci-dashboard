import { Commit } from '../commits/commit.dto';

export class Branch{
  name: string;
  merged: boolean;
  protected: boolean;
  default: boolean;
  developersCanPush: boolean;
  developersCanMerge: boolean;
  canPush: boolean;
  webUrl: string;
  commit: Commit;
}
