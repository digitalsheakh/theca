import dynamic from 'next/dynamic';

export const richTextEditorClassName = 'rich-text-editor';
export const richTextContentClassName = 'rich-text-content';

export const RichTextEditor = dynamic(
  async () => (await import('react-quill')).default,
  {
    ssr: false,
    loading: () => <div className="border p-4 h-48 bg-gray-50 animate-pulse"></div>
  }
);

export const richTextModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    [{ size: ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  },
  history: {
    delay: 300,
    maxStack: 100,
    userOnly: true,
  },
};

export const richTextFormats = [
  'header',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'code-block',
  'color',
  'background',
  'script',
  'list',
  'bullet',
  'indent',
  'align',
  'link',
  'image',
  'video',
];

export function isRichTextEmpty(value: string | null | undefined): boolean {
  if (!value) {
    return true;
  }

  const plainText = value
    .replace(/<(.|\n)*?>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .trim();

  return plainText.length === 0;
}