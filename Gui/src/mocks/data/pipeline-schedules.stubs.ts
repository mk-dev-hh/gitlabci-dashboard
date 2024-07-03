import { PipelineSchedule } from 'src/app/services/pipelineSchedules/pipelineSchedule.dto';
import { PipelineStubs } from './pipeline.stubs';

export class PipelineSchedulesStubs{
  static get AllPipelineSchedules(): PipelineSchedule[] {
    return [this.PipelineSchedule1, this.PipelineSchedule2, this.PipelineSchedule3];
  }


  static get PipelineSchedule1(): PipelineSchedule {
    let pipelineSchedule: PipelineSchedule = new PipelineSchedule();
    pipelineSchedule.updatedAt = '2021-01-29T17:49:28.497+01:00';
    pipelineSchedule.createdAt = '2021-01-29T17:49:27.101+01:00';
    pipelineSchedule.id = 11;
    pipelineSchedule.branch = 'master';
    pipelineSchedule.description = 'Monitoring';
    pipelineSchedule.lastPipeline = PipelineStubs.Pipeline1;
    return pipelineSchedule;
  }

  static get PipelineSchedule2(): PipelineSchedule {
    let pipelineSchedule: PipelineSchedule = new PipelineSchedule();
    pipelineSchedule.updatedAt = '2021-01-29T17:49:28.497+01:00';
    pipelineSchedule.createdAt = '2021-01-29T1:39:27.101+01:00';
    pipelineSchedule.id = 22;
    pipelineSchedule.branch = 'develop';
    pipelineSchedule.description = 'Nightly DEV';
    pipelineSchedule.lastPipeline = PipelineStubs.Pipeline2;
    return pipelineSchedule;
  }

  static get PipelineSchedule3(): PipelineSchedule {
    let pipelineSchedule: PipelineSchedule = new PipelineSchedule();
    pipelineSchedule.updatedAt = '2021-01-29T23:49:28.497+01:00';
    pipelineSchedule.createdAt = '2021-01-29T23:49:27.101+01:00';
    pipelineSchedule.id = 33;
    pipelineSchedule.branch = 'qa';
    pipelineSchedule.description = 'Nightly QA';
    pipelineSchedule.lastPipeline = PipelineStubs.Pipeline3;
    return pipelineSchedule;
  }
}
