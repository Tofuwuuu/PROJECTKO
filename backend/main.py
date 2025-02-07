import os
from fastapi import FastAPI
from starlette.staticfiles import StaticFiles

app = FastAPI()

# Ensure correct path based on project structure
base_dir = os.path.dirname(os.path.abspath(__file__))  # Get backend directory
static_dir = os.path.join(base_dir, "../frontend/public")  # Construct absolute path

# Normalize path for Windows compatibility
static_dir = os.path.normpath(static_dir)

# Debugging print
print(f"Looking for static files in: {static_dir}")

if not os.path.exists(static_dir):
    raise RuntimeError(f"Static directory '{static_dir}' does not exist. Please check the path.")

app.mount("/static", StaticFiles(directory=static_dir), name="static")
