import axios from 'axios';

const useCloudinaryUpload = async (file: File) => {
  interface UploadToCloudinaryResponse {
    secure_url: string;
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'theca_preset'); // Verify this preset exists in Cloudinary dashboard
  formData.append('folder', 'theca-uploads');

  // Automatically detect file type
  let resourceType: 'raw' | 'image' | 'video' = 'raw';
  if (file.type.startsWith('image/')) {
    resourceType = 'image';
  } else if (file.type.startsWith('video/')) {
    resourceType = 'video';
  }

  try {
    const res = await axios.post<UploadToCloudinaryResponse>(
      `https://api.cloudinary.com/v1_1/dbmuhcgn4/${resourceType}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data.secure_url;
  } catch (error: any) {
    console.error('Cloudinary upload error:', {
      status: error.response?.status,
      message: error.response?.data?.error?.message || error.message,
      file: { name: file.name, size: file.size, type: file.type },
      preset: 'theca_preset'
    });
    return null;
  }



};

export { useCloudinaryUpload };
