
const COLORS =
[
  "447604-6cc551-9ffcdf-52ad9c-47624f",
  "91c4f2-8ca0d7-9d79bc-a14da0-7e1f86",
  "ffc857-e9724c-c5283d-481d24-255f85",
  "540d6e-ee4266-ffd23f-3bceac-0ead69",
  "f6e8ea-ef626c-22181c-312f2f-84dccf",
  "5dfdcb-7cc6fe-f4faff-8789c0-08090a",
  "042a2b-5eb1bf-cdedf6-ef7b45-d84727",
  "292e1e-7f0799-9649cb-afbbf2-d3fff3",
  "292e1e-7f0799-9649cb-afbbf2-d3fff3",
  "9ebc9e-ffcfd2-ffafc5-553e4e-e0479e",
  "8c5383-63372c-4a5899-559cad-c1b2ab",
  "3891a6-4c5b5c-fde74c-db5461-e3655b",
  "eec643-141414-eef0f2-0d21a1-011638",
  "c2f970-44344f-564d80-98a6d4-d3fcd5",
  "de1a1a-e8ebf7-acbed8-f2d398-d78521",
  "331e36-41337a-6ea4bf-c2efeb-ecfee8",
  "6e0d25-ffffb3-dcab6b-774e24-6a381f",
  "e2f1af-e3d888-84714f-5a3a31-31231e",
  "5cc8ff-93867f-343633-7d70ba-dec1ff",
  "f59ca9-f6828c-df57bc-a03e99-371e30",
  "100b00-85cb33-efffc8-a5cbc3-3b341f",
  "0b3954-087e8b-bfd7ea-ff5a5f-c81d25",
  "fcaa67-b0413e-ffffc7-548687-473335",
  "26547c-ef476f-ffd166-06d6a0-fffcf9",
  "9ba2ff-a499be-9e8576-7a542e-2a2e45",
  "011627-fdfffc-2ec4b6-e71d36-ff9f1c",
  "88a2aa-ada296-e2856e-f42c04-0f1a20",
  "423b0b-b5fed9-98cbb4-7ba098-474935",
  "e6fafc-9cfc97-6ba368-515b3a-353d2f",
  "56a3a6-9cfc97-484538-d4eac8-c0d8e0",
  "904c77-e49ab0-ecb8a5-eccfc3-957d95",
  "04151f-183a37-efd6ac-c44900-432534",
  "abd6d3-e8cab0-d9cee2-aec6cf-eddfd0"
]

const COLOR = COLORS[Math.floor(Math.random()*COLORS.length)].split("-").map((el)=> "#"+el)


export default COLOR;
