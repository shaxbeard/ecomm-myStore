# Getting Started with this Project

- I use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

# Run frontend & backend

```
npm run dev
```

### Env Variables

Create a .env file in then root and add the following

- NOTE - I use MongoDB for the database. Create a an empty database at mongodb.com and get a connection string URI

```
NODE_ENV = development
PORT = 5001
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'

```

### Seed Mongo Database

You can use the following commands to seed the database with some sample products

```
# Import data
npm run data:import
```

---

# Project Description

```

```
