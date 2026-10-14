// Add one object per paper, newest first. Every field except title,
// authors and venue is optional; empty links are not rendered. Add
// video: '<YouTube id or URL>' to embed a talk or demo under a paper, and
// projects: ['<project page id>'] to list the paper on that project page, and
// equal: ['<author>', ...] to star equal-contribution authors.
const publications = [
  {
    title:
      'Proximity-Constrained Counterfactual Decoding for Hallucination-Robust Medical VQA',
    authors:
      'Dwarikanath Mahapatra, Abhijit Das, Manish Pandey, Joy Dhar, Sudipta Roy, Zongyuan Ge, Behzad Bozorgtabar, Imran Razzak',
    equal: ['Dwarikanath Mahapatra', 'Abhijit Das'],
    venue: 'ECCV 2026',
    projects: ['grounding-reasoning'],
    links: {
      paper: 'https://link.springer.com/chapter/10.1007/978-3-032-37335-9_23'
    }
  },
  {
    title:
      'PROTON: Prototype-Based Test-Time Online OOD Detection for Medical VLMs',
    authors:
      'Abhijit Das, Nichula Wasalathilaka, Yifan Lu, Adinath Dukre, Dwarikanath Mahapatra, Shadab Khan, Imran Razzak',
    venue: 'MICCAI 2026',
    projects: ['grounding-reasoning'],
    links: { paper: 'https://arxiv.org/abs/2606.20913' }
  },
  {
    title:
      'Graph-of-Differences: Anatomy-Structured Difference Alignment for Medical Image Re-Identification',
    authors:
      'Nichula Wasalathilaka, Abhijit Das, Imran Razzak, Dwarikanath Mahapatra',
    equal: ['Nichula Wasalathilaka', 'Abhijit Das'],
    venue: 'MICCAI 2026',
    links: { paper: 'https://arxiv.org/abs/2606.21368' }
  },
  {
    title:
      'Confidence-guided Semi-supervised Learning for Generalized Lesion Localization in X-ray Images',
    authors:
      'Abhijit Das, Vandan Gorade, Komal Kumar, Snehashis Chakraborty, Dwarikanath Mahapatra, Sudipta Roy',
    venue: 'MICCAI 2024',
    links: {
      paper: 'https://papers.miccai.org/miccai-2024/154-Paper3485.html',
      code: 'https://github.com/aj-das-research/AnoMed'
    }
  },
  {
    title:
      'SEANet: Rethinking Skip-Connections Design in Encoder-Decoder Networks via Synergistic Spatial-Spectral Fusion for LDCT Denoising',
    authors: 'Abhijit Das, Vandan Gorade, Dwarikanath Mahapatra, Sudipta Roy',
    venue: 'ICPR 2024',
    links: {
      paper: 'https://link.springer.com/chapter/10.1007/978-3-031-78198-8_29',
      code: 'https://github.com/aj-das-research/SEANet'
    }
  }
]

export default publications
