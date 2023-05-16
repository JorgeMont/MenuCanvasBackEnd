import crypto from "crypto";
import dotenv from "dotenv";
import aws from "aws-sdk";
import { promisify } from "util";
// const dotenv = require("dotenv");
// const aws = require("aws-sdk");
// const crypto = require("crypto");
// const { promisify } = require("util");
const randomBytes = promisify(crypto.randomBytes);
dotenv.config();

const region = "us-east-1";
const bucketName = "menu-canvas-kodemia-bucket";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccesKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccesKey,
  signatureVersion: "v4",
});

export default async function generateUploadURL() {
  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString("hex");

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
}

// export { generateUploadURL };
