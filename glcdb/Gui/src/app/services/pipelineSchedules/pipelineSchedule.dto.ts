import { Pipeline } from '../pipelines/pipeline.dto';

export class PipelineSchedule{
  id: number;
  description: string;
  branch: string;
  createdAt: string;
  updatedAt: string;
  lastPipeline: Pipeline;
}
