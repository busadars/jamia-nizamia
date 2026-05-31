import React from 'react';

export default function HallTicketPage({
  searchParams,
}: {
  searchParams: { ID: string | undefined };
}) {
  const studentId = searchParams.ID;

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <div style={{ border: '2px solid black', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Jamia Nizamia Hall Ticket</h1>
        <hr style={{ margin: '20px 0' }} />
        {studentId ? (
          <h2>Student ID: {studentId}</h2>
        ) : (
          <h2 style={{ color: 'red' }}>Error: No ID provided in the URL</h2>
        )}
        <p style={{ marginTop: '20px', color: '#666' }}>
          This page is live on Vercel from your GitHub repo!
        </p>
      </div>
    </div>
  );
}
