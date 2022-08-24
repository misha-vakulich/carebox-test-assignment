# Carebox Test assignment
During this test assignment I've tried to replicate architecture we described on the call

I've tried several approaches during implementation:
 - Override UI via passing different templates (no data changes possible there)
 - Change look ad feel by simple CSS changes
 - Component inheritance (we can change templates and data for given component without any restriction)

Testing and error hadling I've been to able to implement in time (
  - really hard to find nowadays live covid API
  - a lot of time have been spent on investigation of the ways the tasks could be potentially done
)

Source code contains 2 application (carebox-test1 and carebox-test2)
in order to speed up my development I've choosen nx as monorepo tool. But every library is `publishable`, i.e. could be uploaded to npm registry.

Commands to start apps:
`yarn nx serve carebox-test1` or `npm run nx serve carebox-test1`
`yarn nx serve carebox-test2` or `npm run nx serve carebox-test2`

of course you will have to install all npm modules
`yarn install` or `npm install`
Comments appreciated.
