from flask import Flask, request, send_file, jsonify
import torch
from diffusers import DiffusionPipeline
from io import BytesIO

app = Flask(__name__)

pipe = DiffusionPipeline.from_pretrained(
    "cagliostrolab/animagine-xl-3.1",
    #torch_dtype=torch.float16,
    use_safetensors=True,
)
pipe.to("cpu")

@app.route('/generate', methods=['POST'])
def generate_image():
    try:
        data = request.get_json()

        prompt = data.get('prompt', '')
        negative_prompt = data.get('negative_prompt', '')
        width = data.get('width', 512)
        height = data.get('height', 512)
        guidance_scale = data.get('guidance_scale', 7.0)
        num_inference_steps = data.get('num_inference_steps', 24)

        image = pipe(
            prompt,
            negative_prompt=negative_prompt,
            width=width,
            height=height,
            guidance_scale=guidance_scale,
            num_inference_steps=num_inference_steps,
        ).images[0]

        img_io = BytesIO()
        image.save(img_io, 'PNG')
        img_io.seek(0)

        return send_file(img_io, mimetype='image/png')

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)