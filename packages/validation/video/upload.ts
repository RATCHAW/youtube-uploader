import * as z from "zod";

const VIDEO_MAX_SIZE = 100000000;
const ACCEPTED_VIDEO_TYPES = [
    "video/mp4",
    "video/mob",
    "video/mpeg-1",
    "video/mpeg-2",
    "video/mpeg4",
    "video/mpg",
    "video/avi",
    "video/wmv",
    "video/mpegps",
    "video/flv",
    "video/3gpp",
    "video/webm",
    "video/dnxhr",
    "video/prores",
    "video/cineform",
    "video/hevc",
];

const THUMBNAIL_MAX_SIZE = 1000000;
const ACCEPTED_THUMBNAIL_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const uploadVideoBody = z.object({
    video: z
        .any()
        .refine((file) => file?.length === 1, { message: "File must be present." })
        .refine((file) => ACCEPTED_VIDEO_TYPES.includes(file?.[0]?.type), {
            message: `File type must be ${ACCEPTED_VIDEO_TYPES.join(", ")}.`,
        })
        .refine((file) => file?.[0]?.size <= VIDEO_MAX_SIZE, {
            message: `File size must be less than ${VIDEO_MAX_SIZE / 1000000}MB.`,
        }),
    thumbnail: z
        .any()
        .refine((file) => file?.length === 1, { message: "File must be present." })
        .refine((file) => ACCEPTED_THUMBNAIL_TYPES.includes(file?.[0]?.type), { message: "File must be an image." })
        .refine((file) => file?.[0]?.size <= THUMBNAIL_MAX_SIZE, {
            message: `File size must be less than ${THUMBNAIL_MAX_SIZE / 1000000}MB.`,
        }),
    title: z.string().max(100),
    description: z.string().max(5000).optional(),
});
