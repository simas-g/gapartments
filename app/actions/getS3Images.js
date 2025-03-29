'use server';
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const IMAGE_PREFIX = "kalnieciu196/";

// Initialize the S3 client
const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
export async function getS3ImageUrls() {
  try {
    const command = new ListObjectsV2Command({
      Bucket: process.env.AWS_BUCKET_NAME,
      Prefix: IMAGE_PREFIX,
    });

    const response = await s3Client.send(command);
    const imageUrls = [];

    if (response.Contents) {
      response.Contents.forEach((item) => {
        imageUrls.push(`https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${item.Key}`);
      });
    }

    return imageUrls;
  } catch (error) {
    console.error("Error retrieving image URLs from S3:", error);
    return [];
  }
}