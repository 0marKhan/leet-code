for (let len = 1; len <= n - i; len++) {
      const substring = str.substr(i, len);
      substrings[substring] = (substrings[substring] || 0) + 1;
    }