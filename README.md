# Rachel :two_hearts:
## Discord bot for MVRLY discord server with AI based on bun/discord.js/ollama

![rachel](rachel.png)

___

# Features :sparkles:

- ### AI conversations based on ollama :speech_balloon:
- ### function calling in LLM (wip)
- ### / Commands (wip) 
- ### Database (wip)

![conversation](conversation.png)

___

# Installation :ghost:

## Prerequisites

- ### [Bun](https://bun.sh/)
- ### [Ollama](https://ollama.com/)

## Setup project

### 1. Clone the repository
```bash
git clone https://github.com/Just-Dzhi/Rachel.git
cd Rachel
```

### 2. Install dependencies
```bash
bun install
```

### 3. Set up environment variables:

```bash
cp .env.example .env
```
#### And paste your own values

## Setup ollama

### 1. run server

```bash
ollama serve
```

### 2. download model

```bash
ollama pull qwen2.5
```

### 3. copy model and create Modelfile

```bash
ollama cp qwen2.5 rachel
ollama create rachel -f Modelfile
```

___

# Usage :mushroom:

### 1. run server
```bash
ollama serve
```

### 2. run project
```bash
bun start
```