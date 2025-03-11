import { readReplicas } from '@vetching-corporation/prisma-extension-read-replicas'
import assert from 'node:assert'

assert(typeof readReplicas === 'function')
