# A Local Document Chat ui

Heavily inspired by https://github.com/psychic-api/rag-stack
(Its 98% the same UI)

## Table of Contents

- [A Local Document Chat ui](#a-local-document-chat-ui)
  - [Table of Contents](#table-of-contents)
  - [About ](#about-)
  - [Getting Started ](#getting-started-)

## About <a name = "about"></a>

I really like the original project and but the last commit on it was 2 months ago. I needed to use this project but was facing a few problems:

- Python Dependency issues
- Kubernetes deployment not working properly
- Uploading certain large pdfs caused issues
- I wanted it to integrate with pgvector(work in progress)

I will not be maintaining this so use it if youre ready to make some changes

## Getting Started <a name = "getting_started"></a>

https://github.com/psychic-api/rag-stack#run-locally

Exactly these instructions can be used to run the ui locally.

If you dont want to read this I have modified the `scripts/local/run-dev.sh` script. Run this script after adding your supabase tokens and you should be good to go

And if you dont care about any of that, it is also hosted by some chad here: https://www.chatmyfiles.com/