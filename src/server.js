import "dotenv/config"
import "./database"
import AdminJS from 'adminjs';
import AdminJsExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import express from "express";

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: []
})

const router = AdminJsExpress.buildRouter(adminJS)

app.use(adminJS.options.rootPath, router)
app.listen(5000,() => {
    console.log("AdminJS is under http://localhost:5000/admin")
})