import dotenv from 'dotenv'
import { Command } from 'commander'

const program = new Command()
program.option('--mode <mode>', 'Environment', 'development')
program.parse()

dotenv.config({
  path: program.opts().mode === 'development' ? './.env.development' : './.env.production'
})

export const config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV
}
