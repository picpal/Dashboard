export const request = async (url, requestData) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fakeRequest = (id) => {
  const data = {
    cetification: {
      chartData: {
        성공: Math.round(Math.random(1000) * 1000),
        실패: Math.round(Math.random(100) * 100),
        통신장애: Math.round(Math.random(100) * 100),
        타임아웃: Math.round(Math.random(100) * 100),
      },
    },
    regis: {
      chartData: {
        성공: Math.round(Math.random(1000) * 1000),
        실패: Math.round(Math.random(100) * 100),
        통신장애: Math.round(Math.random(100) * 100),
        타임아웃: Math.round(Math.random(100) * 100),
      },
    },
    approval: {
      chartData: {
        성공: Math.round(Math.random(1000) * 1000),
        실패: Math.round(Math.random(100) * 100),
        통신장애: Math.round(Math.random(100) * 100),
        타임아웃: Math.round(Math.random(100) * 100),
      },
    },
    payment: {
      chartData: {
        성공: Math.round(Math.random(1000) * 1000),
        실패: Math.round(Math.random(100) * 100),
        통신장애: Math.round(Math.random(100) * 100),
        타임아웃: Math.round(Math.random(100) * 100),
      },
    },
  };

  return data[id];
};
