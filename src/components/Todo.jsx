// Visible marker for content that still needs to be provided.
// Search the site for the yellow "À compléter / To fill in" boxes.
export default function Todo({ t, children, block = false }) {
  const Tag = block ? 'div' : 'span';
  return (
    <Tag className={block ? 'todo todo-block' : 'todo'}>
      <span className="todo-tag">{t.meta.todo}</span> {children}
    </Tag>
  );
}
