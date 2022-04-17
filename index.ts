import { Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'


@Injectable()
export class CoolKafkaTooling {

  constructor(private readonly client: ClientKafka) { }

  static register() {
    return {
      provide: CoolKafkaTooling,
      inject: [ClientKafka],
      useFactory: (client: ClientKafka) => {
        // bits here removed to de-cluter the example
        return new CoolKafkaTooling(client)
      }
    }
  }

  // cool stuff ...
}
