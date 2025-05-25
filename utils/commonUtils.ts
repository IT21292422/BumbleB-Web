export const getDirectDownloadUrl = (driveUrl: string): string => {
  // Extract file ID from Google Drive URL
  const match = driveUrl.match(/[-\w]{25,}/);
  if (!match) return driveUrl;
  const fileId = match[0];
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};
