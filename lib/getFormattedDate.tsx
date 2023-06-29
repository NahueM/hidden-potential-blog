export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat(`en-US`, { dateStyle: 'short' }).format(new Date(dateString))
}