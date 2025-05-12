import * as Sentry from '@sentry/node'
import { nodeProfilingIntegration } from '@sentry/profiling-node'

Sentry.init({
    dsn: "https://6e7b2429603e51939603ac48045eaad8@o4509304933515264.ingest.us.sentry.io/4509304936267777",
    integrations : [
        nodeProfilingIntegration(),
        Sentry.mongooseIntegration()
    ],

    // tracesSampleRate : 1.0
});

Sentry.profiler.startProfiler();

Sentry.startSpan({
    name : "My First Transication",
}, () => {

});

Sentry.profiler.stopProfiler();