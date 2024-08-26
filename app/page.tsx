const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Link to Google',
      target: 'https://www.google.com',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1:1',
  },
});