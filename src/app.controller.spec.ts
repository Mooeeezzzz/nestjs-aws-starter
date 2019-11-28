import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as AWS from 'aws-sdk';
import { async } from 'rxjs/internal/scheduler/async';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    AWS.config.update({
      region: 'us-east-1' /* update this if needed */,
    });
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('should return the payload', async () => {
      const Payload = JSON.stringify({
        hello: 'world',
      });

      const lambda = new AWS.Lambda();
      const params = {
        FunctionName: '' /* required */,
        Payload,
      };
      const res: any = await lambda.invoke(params).promise();
      expect(JSON.parse(res.Payload).body).toEqual(Payload);
    });
  });
});
