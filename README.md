# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## 前端 API 请求说明

本项目中的前端 API 请求主要集中在以下组件中，它们直接向后端服务器获取设备和传感器数据：

1. **`src/views/DeviceList.vue`**：
   - **请求接口**：`GET /frontend/devices/latest`
   - **功能**：获取所有设备的最新监测数据并在列表中展示。
   - **数据映射**：由于后端接口字段的设计，前端在获取到数据后会进行字段映射处理，例如将后端的 `humidity` 字段映射为前端显示的 `altitude`（高度）字段。

2. **`src/components/DeviceChart.vue`**：
   - **请求接口**：
     - `GET /frontend/device/temperature`：获取设备的温度历史数据。
     - `GET /frontend/device/humidity`：获取设备的湿度历史数据。
   - **功能**：在点击查看图表时，根据不同的图表类型请求对应的历史数据。
   - **数据映射**：当查看“高度变化”图表时，实际请求的是 `humidity`（湿度）接口，并将其数据映射为高度数据。

> 注：项目中也存在 `src/api/index.js`，定义了一些如 `/api/v1/devices/latest` 等请求路径，但在实际页面 (`DeviceList.vue` 和 `DeviceChart.vue`) 中使用的是基于 Axios 实例直接调用的 `/frontend/...` 接口路径。
