import { Construct } from 'constructs';
import { App } from 'cdk8s';
import { Application, PennLabsChart } from '@pennlabs/kittyhawk';

export class MyChart extends PennLabsChart {
  constructor(scope: Construct) {
    super(scope);

    const domain = 'expensabot.pennlabs.org';
    const image = 'pennlabs/expensabot';
    const secret = 'expensabot';

    new Application(this, 'app', {
      deployment: {
        image,
        secret
      },
      ingress: {
        rules: [{
          host: domain,
          paths: ['/'],
          isSubdomain: true,
        }],
      }
    });
  }
}

const app = new App();
new MyChart(app);
app.synth();
