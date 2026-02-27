import bootstrap from "./app.controller.js"

import { sequelize } from "./DB/connectionDB.js";
import "./DB/models/index.js";   // 👈 مهم جداً



bootstrap();
