import { notFound } from 'next/navigation'
import { NewsEvents, formatDate } from '@/lib/events-data'
import NewsClientPage from './client-page'

// Generate static params for all news entries
export async function generateStaticParams() {
  return NewsEvents.map((event) => ({
    slug: event.link.replace('/news/', ''),
  }))
}

interface NewsPageProps {
  params: {
    slug: string
  }
}

export default function NewsPage({ params }: NewsPageProps) {
  const { slug } = params

  const event = NewsEvents.find(e => e.link === `/news/${slug}`)

  if (!event) {
    notFound()
  }

  const formattedDate = formatDate(new Date(event.date))

  return (
    <NewsClientPage
      event={event}
      formattedDate={formattedDate}
      images={event.images || []}
      content={{ highlights: event.highlights || [] }}
    />
  )
}
