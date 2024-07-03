import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { PipelineSchedule } from '../app/services/pipelineSchedules/pipelineSchedule.dto';
import { PipelineSchedulesStubs } from './data/pipeline-schedules.stubs';

@Injectable()
export class MockPipelinesService {
  public getPipelines(projectId: string): Observable<PipelineSchedule[]> {
    let pipelineSchedulesList: PipelineSchedule[] = PipelineSchedulesStubs.AllPipelineSchedules;
    return new Observable<PipelineSchedule[]>(subscriber => {
      subscriber.next(pipelineSchedulesList);
      subscriber.complete();
    });
  }
}
