function sortComparator(a: any, b: any) {
  console.log('inside sort comparator', a.updatedAt, b.updatedAt);
  if (a.completed === false)
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
}

// In this function we would arrange uncompleted and then completed based on updatedAt
function arrangeItems(items: any) {
  return items.sort(sortComparator);
}

export { arrangeItems };
