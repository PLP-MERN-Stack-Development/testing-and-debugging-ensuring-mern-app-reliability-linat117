function validateBug(bug) {
  if (!bug || typeof bug.title !== 'string' || bug.title.trim().length < 3) {
    return { error: 'Title is required and must be at least 3 characters' };
  }
  if (bug.status && !['open','in-progress','resolved'].includes(bug.status)) {
    return { error: 'Invalid status' };
  }
  return { error: null };
}

module.exports = { validateBug };
