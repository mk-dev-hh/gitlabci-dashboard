import { Pipeline } from 'src/app/services/pipelines/pipeline.dto';

export class PipelineStubs{
  static get AllPipelines(): Pipeline[] {
    return [this.Pipeline1, this.Pipeline2, this.Pipeline3];
  }

  static get Pipeline1(): Pipeline {
    let pipeline: Pipeline = new Pipeline();
    pipeline.updatedAt = '2021-01-29T17:49:28.497+01:00';
    pipeline.ref = 'master';
    pipeline.status = 'running';
    pipeline.createdAt = '2021-01-29T17:49:27.101+01:00';
    pipeline.id = 1;
    pipeline.sha = '1a0f5cd22a696d41f0c188c21e387f9a778e2287';
    pipeline.projectName = 'dms-config-app';
    pipeline.projectId = '3335';
    pipeline.webUrl = 'https://git.d-velop.de/guardians/dms-config/';
    return pipeline;
  }

  static get Pipeline2(): Pipeline {
    let pipeline: Pipeline = new Pipeline();
    pipeline.updatedAt = '2021-01-29T17:49:28.497+01:00';
    pipeline.ref = 'develop';
    pipeline.status = 'success';
    pipeline.createdAt = '2021-01-29T1:39:27.101+01:00';
    pipeline.finishedAt = '2021-01-29T1:49:27.101+01:00';
    pipeline.id = 2;
    pipeline.sha = '2a0f5cd22a696d41f0c188c21e387f9a778e2287';
    pipeline.projectName = 'dms-config-app';
    pipeline.projectId = '3335';
    pipeline.webUrl = 'https://git.d-velop.de/guardians/dms-config/';
    return pipeline;
  }

  static get Pipeline3(): Pipeline {
    let pipeline: Pipeline = new Pipeline();
    pipeline.updatedAt = '2021-01-29T23:49:28.497+01:00';
    pipeline.ref = 'qa';
    pipeline.status = 'failed';
    pipeline.createdAt = '2021-01-29T23:49:27.101+01:00';
    pipeline.finishedAt = '2021-01-29T23:49:27.101+01:00';
    pipeline.id = 3;
    pipeline.sha = '3a0f5cd22a696d41f0c188c21e387f9a778e2287';
    pipeline.projectName = 'dms-config-app';
    pipeline.projectId = '3335';
    pipeline.webUrl = 'https://git.d-velop.de/guardians/dms-config/';
    return pipeline;
  }
}
