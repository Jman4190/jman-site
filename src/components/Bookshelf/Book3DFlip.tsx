import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BookshelfBook } from '~/data/bookshelf'

interface Book3DFlipProps {
  books: BookshelfBook[]
}

interface Book3DProps {
  book: BookshelfBook
  isActive: boolean
  isCoarsePointer: boolean
  reducedMotion: boolean
  onHover: (hover: boolean) => void
  onTouchClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

function Book3D({
  book,
  isActive,
  isCoarsePointer,
  reducedMotion,
  onHover,
  onTouchClick,
}: Book3DProps) {
  const interactionTransform = reducedMotion
    ? 'translateX(0px)'
    : isCoarsePointer
    ? isActive
      ? 'translateX(-4px)'
      : 'translateX(0px)'
    : isActive
    ? 'translateX(clamp(-8px, -1vw, -12px))'
    : 'translateX(0px)'

  const interactionMarginLeft = reducedMotion
    ? '0px'
    : isCoarsePointer
    ? isActive
      ? '2px'
      : '-2px'
    : isActive
    ? 'clamp(4px, 0.5vw, 8px)'
    : 'clamp(-4px, -0.5vw, -6.7px)'

  const interactionMarginRight = reducedMotion
    ? 'clamp(-64px, -8vw, -95px)'
    : isCoarsePointer
    ? isActive
      ? '-28px'
      : '-48px'
    : isActive
    ? 'clamp(-48px, -4vw, -28px)'
    : 'clamp(-90px, -13vw, -145px)'

  return (
    <Link
      href={`/bookshelf/${book.slug}`}
        aria-label={`Open favorite quotes from ${book.title}`}
        aria-current={isCoarsePointer && isActive ? 'true' : undefined}
        data-cy="bookshelf-book-link"
        data-book-slug={book.slug}
        onMouseEnter={() => {
          if (!isCoarsePointer) onHover(true)
        }}
        onMouseLeave={() => {
          if (!isCoarsePointer) onHover(false)
        }}
        onFocus={() => {
          if (!isCoarsePointer) onHover(true)
        }}
        onBlur={() => {
          if (!isCoarsePointer) onHover(false)
        }}
        onClick={onTouchClick}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          flexShrink: 0,
          height: '150px',
          minHeight: '150px',
          width: 'clamp(140px, 16vw, 220px)',
          perspective: '1000px',
          gap: '0px',
          transition: reducedMotion
            ? 'none'
            : 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform, margin',
          transform: interactionTransform,
          marginLeft: interactionMarginLeft,
          marginRight: interactionMarginRight,
          textDecoration: 'none',
          outlineOffset: '3px',
        }}
      >
        <div
          style={{
            transformStyle: 'preserve-3d',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexShrink: 0,
            transformOrigin: 'right center',
            backgroundColor: book.spineColor,
            color: book.textColor,
            transform: reducedMotion
              ? 'rotateY(0deg)'
              : isCoarsePointer
              ? isActive
                ? 'rotateY(-42deg)'
                : 'rotateY(-18deg)'
              : isActive
              ? 'rotateY(-60deg)'
              : 'rotateY(-20deg)',
            transition: reducedMotion
              ? 'none'
              : 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform',
            filter: 'brightness(0.88) contrast(1.5)',
            userSelect: 'none',
            height: '150px',
            width: '24px',
            maxWidth: '24px',
          }}
        >
          <span
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              zIndex: 50,
              height: '100%',
              width: '100%',
              opacity: 0.4,
              filter: 'url("#bookshelf-paper")',
              userSelect: 'none',
            }}
          />
          <h2
            style={{
              fontFamily: '"iA Quattro", serif',
              fontSize: 'clamp(8px, 1vw, 13px)',
              fontStyle: 'normal',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: '1em',
              writingMode: 'vertical-rl',
              marginTop: 'clamp(6px, 1vw, 12px)',
              userSelect: 'none',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxHeight: '90%',
              overflow: 'hidden',
            }}
          >
            {book.title}
          </h2>
        </div>
        <div
          style={{
            transformStyle: 'preserve-3d',
            position: 'relative',
            flexShrink: 0,
            overflow: 'hidden',
            transformOrigin: 'left center',
            transform: reducedMotion
              ? 'rotateY(0deg)'
              : isCoarsePointer
              ? isActive
                ? 'rotateY(12deg)'
                : 'rotateY(38deg)'
              : isActive
              ? 'rotateY(20deg)'
              : 'rotateY(55deg)',
            transition: reducedMotion
              ? 'none'
              : 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform',
            filter: 'brightness(0.88) contrast(1.2)',
            userSelect: 'none',
            height: '150px',
            minHeight: 'min-content',
            width: '100px',
            maxWidth: '100px',
          }}
        >
          <span
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              zIndex: 50,
              height: '100%',
              width: '100%',
              opacity: 0.4,
              filter: 'url("#bookshelf-paper")',
              userSelect: 'none',
            }}
          />
          <span
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
              position: 'absolute',
              top: '0px',
              left: '0px',
              zIndex: 50,
              height: '100%',
              width: '100%',
              background:
                'linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.45) 3px, rgba(255, 255, 255, 0.22) 4px, rgba(255, 255, 255, 0.22) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.22) 9px, transparent 12px)',
            }}
          />
          <Image
            alt={book.title}
            src={book.coverImage}
            width={100}
            height={150}
            sizes="100px"
            style={{
              transition: reducedMotion
                ? 'none'
                : 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
              maxHeight: '100%',
              objectFit: 'cover',
              userSelect: 'none',
              display: 'block',
              width: '100px',
              maxWidth: '100px',
              height: '150px',
            }}
          />
        </div>
    </Link>
  )
}

export default function Book3DFlip({ books }: Book3DFlipProps) {
  const router = useRouter()
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [reducedMotion, setReducedMotion] = React.useState(false)
  const [viewportWidth, setViewportWidth] = React.useState(1280)
  const [isCoarsePointer, setIsCoarsePointer] = React.useState(false)

  const booksPerRow = React.useMemo(() => {
    if (viewportWidth < 640) return 3
    if (viewportWidth < 768) return 4
    if (viewportWidth < 1024) return 5
    return 10
  }, [viewportWidth])

  const bookRows = React.useMemo(() => {
    const rows: BookshelfBook[][] = []
    for (let i = 0; i < books.length; i += booksPerRow) {
      rows.push(books.slice(i, i + booksPerRow))
    }
    return rows
  }, [books, booksPerRow])

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarseQuery = window.matchMedia('(pointer: coarse)')

    const setViewport = () => setViewportWidth(window.innerWidth)
    const setPointer = () =>
      setIsCoarsePointer(coarseQuery.matches || window.innerWidth < 768)
    const setPreference = () => setReducedMotion(motionQuery.matches)

    setPreference()
    setPointer()
    setViewport()

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', setPreference)
      coarseQuery.addEventListener('change', setPointer)
      window.addEventListener('resize', setViewport)
      window.addEventListener('resize', setPointer)
      return () => {
        motionQuery.removeEventListener('change', setPreference)
        coarseQuery.removeEventListener('change', setPointer)
        window.removeEventListener('resize', setViewport)
        window.removeEventListener('resize', setPointer)
      }
    }

    motionQuery.addListener(setPreference)
    coarseQuery.addListener(setPointer)
    window.addEventListener('resize', setViewport)
    window.addEventListener('resize', setPointer)
    return () => {
      motionQuery.removeListener(setPreference)
      coarseQuery.removeListener(setPointer)
      window.removeEventListener('resize', setViewport)
      window.removeEventListener('resize', setPointer)
    }
  }, [])

  React.useEffect(() => {
    setHoveredIndex(null)
    setActiveIndex(null)
  }, [router.asPath])

  React.useEffect(() => {
    if (typeof document === 'undefined') return

    const handlePointerDown = (event: Event) => {
      const target = event.target as Node | null
      if (!target || !containerRef.current) return
      if (!containerRef.current.contains(target)) setActiveIndex(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [])

  React.useEffect(() => {
    setHoveredIndex(null)
    setActiveIndex(null)
  }, [isCoarsePointer, booksPerRow])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12">
      <h6
        className="text-center font-medium"
        style={{
          lineHeight: '1.4em',
          fontFamily: '"iA Quattro", serif',
          fontSize: 'clamp(16px, 2vw, 26px)',
          fontWeight: 500,
          color: '#9e9e9e',
          maxWidth: '90%',
          margin: '0 auto',
        }}
      >
        <span>
          {isCoarsePointer
            ? 'Tap once to preview, tap again to open quotes'
            : 'Hover or tap on the books'}
        </span>
      </h6>

      <svg
        style={{
          position: 'absolute',
          inset: 0,
          visibility: 'hidden',
          width: 0,
          height: 0,
        }}
      >
        <defs>
          <filter id="bookshelf-paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1"
              numOctaves="8"
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="white"
              surfaceScale="1"
              result="diffLight"
            >
              <feDistantLight azimuth="45" elevation="35" />
            </feDiffuseLighting>
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        data-cy="bookshelf-shelf"
        data-books-per-row={booksPerRow}
        className="w-full py-2 space-y-10"
      >
        {bookRows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            data-cy="bookshelf-row"
            className="flex flex-row items-center justify-center"
            style={{
              perspective: '2000px',
              perspectiveOrigin: 'center center',
              gap: '0px',
            }}
          >
            {row.map((book, index) => {
              const globalIndex = rowIndex * booksPerRow + index

              const isActive = isCoarsePointer
                ? activeIndex === globalIndex
                : hoveredIndex === globalIndex

              return (
                <Book3D
                  key={book.slug}
                  book={book}
                  isActive={isActive}
                  isCoarsePointer={isCoarsePointer}
                  reducedMotion={reducedMotion}
                  onTouchClick={(event) => {
                    const isKeyboardActivation = event.detail === 0
                    if (!isCoarsePointer || isKeyboardActivation) return

                    if (activeIndex !== globalIndex) {
                      event.preventDefault()
                      setActiveIndex(globalIndex)
                    }
                  }}
                  onHover={(hover) =>
                    setHoveredIndex(hover ? globalIndex : null)
                  }
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
