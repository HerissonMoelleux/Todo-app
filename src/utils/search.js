function calculateScore(text, lowerQuery, chunks) {
  const lowerText = (text || "").toLowerCase();
  let score = 0;

  if (lowerText.includes(lowerQuery)) {
    score += 100;
  }

  chunks.forEach((chunk) => {
    if (lowerText.includes(chunk)) {
      score += 1;
    }
  });

  return score;
}

export function filterBySearch(query, items) {
  if (!query) {
    return items;
  }

  const lowerQuery = query.toLowerCase();
  const chunks = [];

  if (lowerQuery.length < 3) {
    chunks.push(lowerQuery);
  } else {
    for (let i = 0; i < lowerQuery.length - 2; i++) {
      chunks.push(lowerQuery.substring(i, i + 3));
    }
  }

  return items
    .map((item) => ({
      item,
      score: calculateScore(item.content, lowerQuery, chunks),
    }))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((match) => match.item);
}
